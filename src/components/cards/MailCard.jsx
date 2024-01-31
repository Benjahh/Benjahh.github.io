import { FiExternalLink } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';

export const MailCard = () => {
  return (
    <>
      <h1>Lets get in touch.</h1>
      <IoIosMail size={120} />
      <FiExternalLink className="absolute top-0 right-0  m-10" size={20} />
    </>
  );
};
