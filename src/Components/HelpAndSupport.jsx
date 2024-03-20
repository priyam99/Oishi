// Import the Accordion component
import Accordion from "./Accordion";
import help from "../img/help.jpg";

const HelpAndSupport = () => {
  const faqData = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button at the top right corner of the page. Fill in the required information, such as your email address, phone number, and password. Once done, click on 'Create Account.' You will receive a verification email or OTP to complete the registration.",
    },
    {
      question: "Can I change my password?",
      answer: "Yes, you can change your password at any time. Log in to your account, go to 'Account Settings,' and choose the 'Change Password' option. Enter your current password and the new password you want to set. Click 'Save' to update your password.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods, including credit/debit cards, net banking, and popular digital wallets. During the checkout process, you can choose your preferred payment method and proceed to make a secure payment for your order.",
    },
    {
      question: "How to contact customer support?",
      answer: "If you need assistance or have any queries, you can contact our customer support team through the 'Help & Support' section on our platform. Alternatively, you can reach out to us via email at support@example.com or call our helpline at +1-XXX-XXXX.",
    },
    {
      question: "Is my personal information secure?",
      answer: "We take the security of your personal information seriously. Our platform uses advanced encryption techniques to protect your data. Rest assured that your details are securely stored, and we do not share your information with third parties without your consent.",
    },
  ];
  
  
    return (
      <div className="flex p-8 mt-16">
        {/* Left Part: Image */}
        <div className="w-1/2">
          <img src={help} alt="" />
        </div>
  
        {/* Right Part: Accordion with Questions */}
        <div className="w-1/2 ml-8">
          <h2 className="text-3xl font-bold mb-6">Help and Support</h2>
          <Accordion data={faqData} />
        </div>
      </div>
    );
  };
  
  export default HelpAndSupport;
  