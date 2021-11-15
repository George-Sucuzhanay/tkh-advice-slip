async function getAdvice() {
  let url = "https://api.adviceslip.com/advice";
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    console.log('our data is', data)
    return data;
  }
  else {
    throw new Error("There was an error getting advice: " ,
    response.statusText);
  }
}

async function main() {
  const adviceData = await getAdvice();
  updateHtml(adviceData.slip.advice);
}

function updateHtml(advice) {
  $("#advice").text(advice);
}

main ();