function Index() {
  return (
    <div className="indextable">
      <table id="crypto">
      </table>
    </div>
  );
}

async function getData() {
  const listdata = document.getElementById("crypto")
  try { 
    const res = await fetch("https://api.coincap.io/v2/assets")
    const data = await res.json()
    let details = data.data.slice(0,10).sort((a,b) => Number(b.priceUsd)-Number(a.priceUsd))
    details = details.map(e => `<tr><td id="sym">${e.name}</td><td id="price">${Number(e.priceUsd).toFixed(4)}</td><td id="change">${Number(e.changePercent24Hr).toFixed(2)}</td></tr>`)
    details.unshift("<tr><th>Name</th><th>Value in USD</th><th>Chg%</th></tr>")
    listdata.innerHTML = details.sort((a,b) => a-b).join("")
  } catch {listdata.innerHTML = "Server Error please reload page"}

}
setInterval(() => {
  getData()
}, 950)


  
export default Index;