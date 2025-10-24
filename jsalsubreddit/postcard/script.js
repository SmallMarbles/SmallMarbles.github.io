async function findNeighbor() {
  const input = document.getElementById('orderInput').value.trim();
  const resultDiv = document.getElementById('result');
  const extraDiv = document.getElementById('extraDetails');
  resultDiv.innerHTML = '';

  if (!input) {
    resultDiv.textContent = 'Please enter an order number.';
    return;
  }

  const orderNumber = parseInt(input);

  try {
    const response = await fetch('data.json');
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
      console.log("thing NO FOUND")
      //alert(`<h1> ${orderNumber}'s owner is not in the database! If you own this card, and want to be added, go to the "Add My Card" link at the bottom of the page!</h1>`)
      extraDiv.innerHTML = `<h1> ${orderNumber}'s owner is not in the database! If you own this card, and want to be added, go to the "Add My Card" link at the bottom of the page!</h1>` 
    } else {
      console.log("thing VERY FOUND")
      extraDiv.innerHTML =  `<strong>The current number being looked up is ${yourOrderNumber.order_number}, which seems to be owned by ${yourOrderNumber.owner}</strong>` 
    }
    if (prev) {
      resultDiv.innerHTML += `<br>
        <strong>Found (-1 backwards) neighbor order number:</strong><br> 
        Order #: ${prev.order_number}<br>
        Owned by: ${prev.owner}<br>
      `;
    } else {
      resultDiv.textContent = 'No neighboring -1 order found'; 
    }
    if (next) {
      resultDiv.innerHTML += `<br>
        <strong>Found (+1 forwards) neighbor order number:</strong><br> 
        Order #: ${next.order_number}<br>
        Owned by: ${next.owner}<br>
      `; 
    } else {
      resultDiv.textContent = 'No neighboring +1 order found'; 
    }
    if (!prev, !next) {
      resultDiv.textContent = 'No neighboring orders found, sorry, you are alone buddy :('; 
    }

  } catch (error) {
    console.error(error);
    resultDiv.textContent = 'Error loading data.';
  }
}
