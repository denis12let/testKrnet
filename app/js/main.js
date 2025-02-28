document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const headerBtn = document.querySelector('.header-btn');
  const headerClose = document.querySelector('.header__close');
  const overlay = document.querySelector('.overlay');

  headerBtn.addEventListener('click', () => {
    header.classList.remove('header--close');
    document.body.classList.add('no-scroll');
    overlay.style.display = 'block';
  });

  headerClose.addEventListener('click', () => {
    header.classList.add('header--close');
    document.body.classList.remove('no-scroll');
    overlay.style.display = 'none';
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header') && !event.target.closest('.header-btn')) {
      header.classList.add('header--close');
      document.body.classList.remove('no-scroll');
      overlay.style.display = 'none';
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  clearErrors();

  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'ведите ваше имя.';
    nameError.style.display = 'block';
    nameInput.focus();
    return;
  }

  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'поле не заполнено';
    emailError.style.display = 'block';
    emailInput.focus();
    return;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'некорректный email';
    emailError.style.display = 'block';
    emailInput.focus();

    return;
  }

  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('messageError');

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'введите сообщение';
    messageError.style.display = 'block';
    messageInput.focus();
    return;
  }

  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  sendFormData(formData)
    .then((response) => {
      if (response.ok) {
        console.log('успешно');
        this.reset();
      } else {
        throw new Error('ошибка при отправке формы');
      }
    })
    .catch((error) => {
      console.error('ошибка:', error);
    });

  console.log('успешно');
  this.reset();
});

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (error) {
    error.textContent = '';
    error.style.display = 'none';
  });
}

async function sendFormData(data) {
  const url = 'https://jsonplaceholder.typicode.com';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

console.log(Fib(1));
console.log(Fib(2));
console.log(Fib(3));
console.log(Fib(4));
console.log(Fib(5));
console.log(Fib(6));
console.log(Fib(7));
console.log(Fib(8));

function Fib(n) {
  let prev = 0;
  let curr = 1;

  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return n < 3 ? n - 1 : curr;
}
