
function cleanSelect (select) {
    return $(select).removeClass('icon-ru').removeClass('icon-ukr').removeClass('icon-blr').removeClass('icon-kz');
}

function formSelect() {
    var select = cleanSelect('.select-events');

    select.addClass(function() {

        switch (select.val()) {
            case '0': 
                return 'icon-ru';
                break;
            case '1':
                return 'icon-ukr';
                break;
            case '2':
                return 'icon-blr';
                break;
            case '3':
                return 'icon-kz';
                break;
            default:
                break;
        }
    });

    select.css({ height: 'auto', overflow: 'hidden', zIndex: '40000', paddingLeft: '0' });

    select.on('mouseleave', function () {
        this.size = 1;
        cleanSelect(this).addClass(function() {

            switch (select.val()) {
                case '0': 
                    return 'icon-ru';
                    break;
                case '1':
                    return 'icon-ukr';
                    break;
                case '2':
                    return 'icon-blr';
                    break;
                case '3':
                    return 'icon-kz';
                    break;
                default:
                    break;
            }
        });
    });

    select.on('mouseover', function () {
        cleanSelect(this);
        this.size = $(this).find('option').length;
    });
}

$(function () {
    formSelect();
});