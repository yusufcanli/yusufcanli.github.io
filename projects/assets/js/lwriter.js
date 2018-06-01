$count = $('.lwriter').length;
$text = $('.lwriter:eq(0)').attr('writer');
$input = $('.lwriter:eq(0)');
if ($input.get(0).hasAttribute('lwalign')) {
    $align = $input.attr('lwalign');
    if ($align != 'right') {
        $input.css({
            direction: 'lft',
            textAlign: 'left'
        });
    }
    if ($align == 'right') {
        $input.css({
            direction: 'rtl',
            textAlign: $align
        });
    }
}
if ($input.get(0).tagName.toLowerCase() != 'input') {
    $input.html('<span class="lwcarpet"></span>');
}
$input.focus();
$input.css('width', '' + $text.length + 'ch');
$op = 1;
$i = 0;

function start() {
    if ($i != $text.length) {
        $speed = $input.attr('lwspeed');
        if ($input.get(0).tagName.toLowerCase() != 'input') {
            $('.lwcarpet').before($text.charAt($i));
            console.log($input.get(0).tagName.toLowerCase())
        } else {
            $input.val($input.val() + $text.charAt($i));
            console.log($input.get(0).tagName.toLowerCase())
        }
        $i++;
        setTimeout(function () {
            start();
        }, $speed);
    } else {
        $input.blur();
        $('.lwcarpet').remove();
        if ($op >= $count) {} else {
            $text = $('.lwriter:eq(' + $op + ')').attr('writer');
            $input = $('.lwriter:eq(' + $op + ')');
            $input.css('width', '' + $text.length + 'ch');
            if ($input.get(0).hasAttribute('lwalign')) {
                $align = $input.attr('lwalign');
                if ($align != 'right') {
                    $input.css({
                        direction: 'lft',
                        textAlign: 'left'
                    });
                }
                if ($align == 'right') {
                    $input.css({
                        direction: 'rtl',
                        textAlign: $align
                    });
                }
            }
            if ($input.get(0).tagName.toLowerCase() != 'input') {
                $input.html('<span class="lwcarpet"></span>');
            }
            $input.focus();
            $op++;
            $i = 0;
            setTimeout(function () {
                start();
            }, 1000);
        }
    }

}
$(document).ready(function () {
    setTimeout(function () {
        start();
    }, 2000);
})
$('.four').click(function () {
    window.location.href = "https://github.com/yusufcanli/light-writer.js";
})
