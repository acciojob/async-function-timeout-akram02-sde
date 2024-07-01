const text = document.getElementById('text');
const delay = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', async () => {
	output.innerText = "";
	const message = await getData(text.value, delay.value);
	output.innerText = message;
})

function getData(text, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {resolve(text)}, delay)
	})
}
