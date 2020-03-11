// DOCUMENT READY -----------------------------------------------------------
$(document).ready(function () {

    // плавный скролл при нажатии на меню
    $('.navbar').on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });

    // открытие модального окна для Входа
    $('.buttons-enter, .mobile-enter').click(() => {
        $('#enter').css('display', 'block');
        $('#recovery').css('display', 'none');
        $('#toRegister').css('display', 'none');
        $('.recovery-error').css('visibility', 'hidden');
        $('.overlay').fadeIn();

        //закрытие модального окна
        $('.overlay').mousedown(function (e) {
            let div = $(".form-wrapper");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.overlay').fadeOut();

                //удаление события закрытия модального окна
                $(this).off('mousedown');
            }
        });
    });

    // Кнопка "Забыли пароль?"
    $('#forgotPassword').click(() => {
        $('#enter').css('display', 'none');
        $('#recovery').css('display', 'block');
    });

    // Отправка формы при нажатии "Восстановление пароля"
    $('#recovery .mainBtn button').click((e) => {
        e.preventDefault();
        let emailVal = $('#recovery input').val();
        if (emailVal === '') {
            $('.recovery-error').css('visibility', 'visible');
        } else {
            $('#recovery').submit();
        }
    });

    // Показывать форму для регистрации при нажатии кнопки "Регистрация"
    $('#enter .btns span:last-child').click(() => {
        $('#enter').css('display', 'none');
        $('#toRegister').css('display', 'block');
    });

    // Показывать форму для входа при нажатии кнопки "Вход"
    $('#toRegister .btns span:first-child').click(() => {
        $('#enter').css('display', 'block');
        $('#toRegister').css('display', 'none');
    });

    // Кнопка "Меню?"
    $('.mobile-navbar').click(() => {
        $('header nav .navbar>ul').toggleClass('d-none');
    });

    
});