/**
 * Build row data to be shown in a table
 *
 * @param {object} yearlyTechStats Year by year stats of technologies mentioned in StackOverflow
 * @param {Array<string>} selectedTechs Technologies selected
 * @param {number} firstYear First year of data selected
 * @param {number} lastYear Last year of data selected
 * @returns {Array<string|number>}
 */
function buildRowData (yearlyTechStats, selectedTechs, firstYear, lastYear) {
  let dataArray = [];

  for (let year in techStats) 
  {
    if (year > firstYear && year < lastYear) 
    {
      let yearData = techStats[year];
      dataArray.push(yearData);
    }
    
  }

  return dataArray;
  
}

/**
 * Get HTML of table rows
 *
 * @param {Array<string|number>} rowData
 * @returns {string} HTML of the table rows
 */
function constructTableRowsHtml (rowData) {
  
  let html = "";

  for (let year in data) 
  {
    let rowData = data[year];
    html += "<tr>";
    for (let language in rowData) 
    {
      html += "<td>" + language + "</td><td>" + rowData[language] + "</td>";
    }
    html += "</tr>";
  }

  return html; 
}

/**
 * Get HTML of table heading row
 *
 * @param {Array<string|number>} headings Table headings
 * @returns {string} HTML of the heading row
 */
function constructTableHeadHtml (headings) {
  let html = "";

  for (let year in data) 
  {
    let rowData = data[year];
    html += "<tr>";
    for (let language in rowData) 
    {
      html += "<td>" + language + "</td><td>" + rowData[language] + "</td>";
    }
    
  }

  return html; 
}
