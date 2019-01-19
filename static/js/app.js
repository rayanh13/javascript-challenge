// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

function printTable(tableData) {
    tbody.html("");
    console.log("Hello there!");
    tableData.forEach((dataReport) => {
        var row = tbody.append("tr");
        Object.entries(dataReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };

  var submit = d3.select("#filter-btn");

  submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement_1 = d3.select("#city");
  var inputElement_2 = d3.select("#state");
  var inputElement_3 = d3.select("#country");
  var inputElement_4 = d3.select("#shape");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue_1 = inputElement_1.property("value");
  var inputValue_2 = inputElement_2.property("value");
  var inputValue_3 = inputElement_3.property("value");
  var inputValue_4 = inputElement_4.property("value");

  console.log(inputValue);
  console.log(inputValue_1);
  console.log(inputValue_2);
  console.log(inputValue_3);
  console.log(inputValue_4);

  if (inputValue) {
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    printTable(filteredData);
  }

  if (inputValue_1) {
    var filteredData_1 = tableData.filter(city => city.city === inputValue_1);
    console.log(filteredData_1);
    printTable(filteredData_1);
  };

  if (inputValue_2) {
    var filteredData_2 = tableData.filter(state => state.state === inputValue_2);
    console.log(filteredData_2);
    printTable(filteredData_2);
  }

  if (inputValue_3) {
    var filteredData_3 = tableData.filter(country => country.country === inputValue_3);
    console.log(filteredData_3);
    printTable(filteredData_3);
  }

  if (inputValue_4) {
    var filteredData_4 = tableData.filter(shape => shape.shape === inputValue_4);
    console.log(filteredData_4);
    printTable(filteredData_4);
  }
  
});

printTable(tableData);