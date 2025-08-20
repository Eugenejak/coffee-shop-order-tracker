const orders = [];

const submitOrder = () => {
  const nameInput = document.getElementById("customerName").value.trim();
  const drinkOrder =
    document.getElementById("coffeeOrder").value.trim() ?? "Americano";
  const displayMessage = document.getElementById("orderMessage");

  if (!nameInput) {
    displayMessage.textContent = "Please enter a customer name.";
    return;
  }

  const newOrder = {
    name: nameInput,
    drink: drinkOrder || "Americano",
    time: new Date().toLocaleTimeString(),
  };

  orders.push(newOrder);
  displayMessage.textContent = `Thanks ${newOrder.name}! Your ${newOrder.drink} is being prepared.`;

  renderOrders();
};

const renderOrders = () => {
  const orderList = document.getElementById("orderList");
  orderList.innerHTML = '';

  const lastThreeOrders = orders.slice(-3);
  lastThreeOrders.forEach(({ name, drink, time }) => {
    const li = document.createElement('li');
    li.textContent = `${name} ordered ${drink} at ${time}`;
    orderList.appendChild(li);
  });
};
