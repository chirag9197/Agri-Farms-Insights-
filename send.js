function sendMessage(text) {


    const xht = new XMLHttpRequest();
    const url = `https://api.telegram.org/bot6178294062:AAEi72UVOgyEm_RhZqilO_ANsKcRcW06C-0/sendMessage?chat_id=6455583600&text=${encodeURIComponent(text)}`;
  
    xht.open("GET", url);
  
    xht.send();
  }
  async function submits() {
    let names = document.getElementById("names").value
  let email = document.getElementById("email").value
  let messages = document.getElementById("messages").value
  let subj = document.getElementById("subject").value
  const gmailRegex = /@gmail\.com$/;
  if(!names.trim() ||
  !messages.trim() ||

  !gmailRegex.test(email)){
      alert("Fill The Blanks or Enter Correct Mail")
      return
  }else{
    let messageR = `
Name:  ${names}
Email:  ${email}
Phone No: ${subj}
Message:  ${messages}`
  
    sendMessage(messageR);
    document.querySelector(".main_bt").textContent="Message Sent!"
    document.querySelector(".main_bt").disabled=true
    document.querySelector(".main_bt").style.backgroundColor="red"
    
    
  
  } 
  }