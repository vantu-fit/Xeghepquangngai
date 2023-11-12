import axios from "axios";

interface EmailProps {
  name: string;
  from: string;
  to: string;
  phone: string;
  type: string;
  note: string;
}

export const sendEmail = async ({
  from,
  name,
  note,
  phone,
  to,
  type,
}: EmailProps) => {
  const data = {
    service_id: "service_crpu8j8",
    template_id: "template_qp02pyq",
    user_id: "LqqRV1bAjNRoEX0Ib",
    template_params: {
      from,
      name,
      note,
      phone,
      to,
      type,
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };

  axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((response) => {
      console.log("Your mail is sent!");
    })
    .catch((error) => {
      console.error("Oops...", error);
    });
};

