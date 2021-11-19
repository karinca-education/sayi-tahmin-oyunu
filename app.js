const randomInput = document.getElementById('randomNum');
const predictedInput = document.getElementById('predictedNum');
const modalOpacity = document.querySelector('.modal-opacity');
const modalMessage = document.querySelector('.modal-message');
const closeButton = document.querySelector('.close');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const input = document.getElementsByTagName('input');

const handlePrediction = () => {
  const limitNumber = randomInput.value;
  var randomNumber = Math.ceil(Math.random() * limitNumber);
  var predictedNumber = predictedInput.value;
  if (limitNumber < 0) {
    if (parseInt(predictedNumber) < parseInt(limitNumber)) {
      message(
        'HATA!!!!!!!',
        'Lütfen 0 ile belirlenen limit arasında bir sayı giriniz'
      );
      return;
    }
    else {
      message(
        'Maalesef',
        'Yanlış tahmin aranılan sayı ' + randomNumber
      );
      return;
    }

  }
  if (!randomInput.value) {
    message(
      'Bu alan zorunludur',
      'Limit alanı doldurulması zorunlu bir alandır'
    );
    return;
  }
  if (!predictedInput.value) {
    message(
      'Bu alan zorunludur',
      'Tahmin alanı doldurulması zorunlu bir alandır'
    );
    return;
  }
  if (predictedNumber > limitNumber) {
    message(
      'HATA!!!1!!1!!1',
      'Tahmin sayısı ' + parseInt(limitNumber) + ' sayısından büyük olamaz'
    );

    return;
  }

  randomNumber == predictedNumber
    ? message('Tebrikler', 'Doğru tahmin ettiniz')
    : message('Olmadı ', 'Başaramadık abi, aranılan sayı ' + randomNumber);
};

closeButton.addEventListener('click', () => {
  modalMessage.style.visibility = 'hidden';
  modalOpacity.style.visibility = 'hidden';
  modalMessage.style.top = '-180px';
});

const message = (titleMessage, subtitleMessage) => {
  title.innerText = titleMessage;
  subtitle.innerText = subtitleMessage;
  modalMessage.style.visibility = 'visible';
  modalMessage.style.top = '10px';
  modalOpacity.style.visibility = 'visible';
};
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      handlePrediction();
    }
  });
}
