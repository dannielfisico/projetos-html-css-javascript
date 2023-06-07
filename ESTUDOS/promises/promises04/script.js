
 document.getElementById('btnVerificar').onclick =async () => {

    const userName = document.getElementById('nomeDoUsuario')
    
    const url = `https://onlyfans.p.rapidapi.com/signinfo/?useragent=${userName.value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1afcde0304msh199c7cf759e2791p15fa29jsnd84a80ed00cf',
		'X-RapidAPI-Host': 'onlyfans.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }

