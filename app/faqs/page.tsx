import { faqsData } from "@/assets/assets";
import FAQAccordion from "../components/FAQAccordion";

const page = () => {
  return <FAQAccordion faqs={faqsData} />;
};

export default page;
