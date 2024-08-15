const { Builder, Browser, By, Select, Key } = require("selenium-webdriver");
require("chromedriver");
//Test
(async function example() {
  // Launch the chrome browser

  const driver = await new Builder().forBrowser("chrome").build();

  // Maximize the window
  await driver.manage().window().maximize();

  //Navigate the web page

  await driver.get("https://www.qpdemoecommerce.com");

  // Navigate the product
  const product = await driver.findElement(
    By.xpath(
      '//*[@id="post-29"]/div/div/section[4]/div/div/div/div/div/div/div/ul/li[1]/div[2]/a[1]/h2'
    )
  );

  // clicking the product
  await product.click();

  // Adding to the cart
  const cart = await driver.findElement(By.name("add-to-cart"));

  // clicking the button
  await cart.click();

  // Navigating view cart
  const viewcart = await driver.findElement(By.linkText("View cart"));

  // clicking the view cart button
  await viewcart.click();

  // Navigating the proceed button
  const proceed = await driver.findElement(By.linkText("Proceed to checkout"));

  // clicking the proceed button
  await proceed.click();

  // Navigating first name input field and sending keywords
  await driver.findElement(By.id("billing_first_name")).sendKeys("John");

  // Navigating last name input field and sending keywords
  await driver.findElement(By.id("billing_last_name")).sendKeys("Doe");

  // Navigating dropdown and selscting a value
  const countrydd = await driver.findElement(By.id("billing_country"));

  const selectValue = await new Select(countrydd);

  await selectValue.selectByVisibleText("India");

  // Navigating address field and sending keywords
  await driver
    .findElement(By.name("billing_address_1"))
    .sendKeys("AB Example Road");

  // Navigating city field and sending the keywords
  await driver.findElement(By.css("#billing_city")).sendKeys("Mumbai");

  // Navigating state dropdown and selecting value
  const statedd = await driver.findElement(By.name("billing_state"));

  const selectState = await new Select(statedd);

  await selectState.selectByVisibleText("Maharashtra");

  // Navigating postcode field and sending the keywords
  await driver.findElement(By.css("#billing_postcode")).sendKeys("123456");

  // Navigating phone field and sending the keywords
  await driver.findElement(By.css("#billing_phone")).sendKeys("1234567890");

  // Navigating email field and sending the keywords
  await driver
    .findElement(By.css("#billing_email"))
    .sendKeys("example@email.com");

  // Navigating order button and click

  setTimeout(() => {
    driver.findElement(By.id("place_order")).click();
    
    // CLosing the browser
    setTimeout(() => {
      driver.quit();
    }, 3000);
  }, 3000);
})();
