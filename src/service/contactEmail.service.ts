import emailjs from '@emailjs/browser';
import { FormContact } from '../components/contact/FormContact';

export const sendEmail = async (data: FormContact) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const userId = import.meta.env.VITE_USER_ID;

  console.log(serviceId, templateId, userId);

  return emailjs.send(
    serviceId, 
    templateId, 
    data, 
    userId);
};