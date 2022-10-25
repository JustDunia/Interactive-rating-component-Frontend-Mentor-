document.addEventListener('DOMContentLoaded', function () {
	const submitBtn = document.querySelector('.submit-btn');
	let chosenRate = document.querySelector('.chosen-rate');

	document.querySelectorAll('.rating-btn').forEach(btn => {
		btn.addEventListener('click', e => {
			chosenRate.innerText = e.target.innerText;
			submitBtn.removeAttribute('disabled');
		});
	});

	submitBtn.addEventListener('click', () => {
		document.querySelector('.rating-state').classList.add('hide');
		document.querySelector('.thank-you-state').classList.remove('hide');
	});
});
