import { debug } from 'console'
import OpenAI from 'openai'

type RequestData = {
  currentModel: string
  message: string
}


export async function POST(request: Request) {
  const { message } = (await request.json()) as RequestData

    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("Authorization", "Bearer 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");
    myHeaders.append("Cookie", "__cf_bm=QzDtmeaKgRvmpF.yFlTaZXBY2BLTQB9XoH08xB8Gbnc-1700339155-0-AQ8/HQQpsetjW2gkBjiT+HSSN+wxEG8FEbq3uxP/mw7eTt+nu7VBPBctLgC/WMux0sn05eQSsD8ijQ2XM4e+Lls=");

    var raw = JSON.stringify({
      "model": "mistral-7b-instruct",
      "stream": false,
      "max_tokens": 1024,
      "frequency_penalty": 1,
      "temperature": 0,
      "messages": [
        {
          "role": "system",
          "content": "Be precise and concise in your responses."
        },
        {
          "role": "user",
          "content": message
        }
      ]
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    debugger;
      //@ts-ignore
    const data = await fetch("https://api.perplexity.ai/chat/completions", requestOptions)
      .then(response => response.json())

      .catch(error => console.log('error', error));


    //   //@ts-ignore
    const message1 = data.choices[0]?.message?.content;

    console.log(message1,"sd")
  return Response.json({
    message: message1
  })
}



