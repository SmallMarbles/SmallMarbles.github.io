async function findNeighbor() {
  const input = document.getElementById('orderNumber').value.trim();
  const resultDiv = document.getElementById('result');
  const extraDiv = document.getElementById('extraDetails');
  resultDiv.innerHTML = '';

  if (!input) {
    resultDiv.textContent = 'Please enter an order number.';
    return;
  }

  const orderNumber = parseInt(input);

  try {
    const response = await fetch('/data.json');
    const data = await response.json();

    const orders = data.map(item => ({
      ...item,
      order_number: Number(item.order_number)
    }));
    const prev = orders.find(item => item.order_number === orderNumber - 1);
    const next = orders.find(item => item.order_number === orderNumber + 1);
    const yourOrderNumber = orders.find(item => item.order_number === orderNumber);
    console.log(orders.find(item => item.order_number === orderNumber)) //debug log to make sure it logs properly

    if (!yourOrderNumber) { 
      url = `https://docs.google.com/forms/d/e/1FAIpQLSffSz4MOwMJO1rtrjFTQk_2ESjBFaJp6oQpxduTxnQE8hgXWQ/viewform?usp=pp_url&entry.2140477326=${orderNumber}`  
      console.log("thing NO FOUND")             
      resultDiv.innerHTML = `<p><b>Good(?) news!</b>, your card isn't in the database! To submit it to the database, to continue just click the following link: <a href="${url}">${url}</a> </p> ` 
    } else {
      console.log("thing VERY FOUND")
      resultDiv.innerHTML =  `<strong>The current number being looked up is ${yourOrderNumber.order_number} (owned by ${yourOrderNumber.owner}), which is already in the database. Sorry. If you believe this is a mistake, please contact me on Reddit.</strong>` 
    }

  } catch (error) {
    console.error(error);
    resultDiv.textContent = 'Error loading data.';
  }
}
