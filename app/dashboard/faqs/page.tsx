import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqsPage = () => {
  return (
    <main>
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
          FAQs
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Frequently Asked Questions
        </p>
      </section>

      <section className="md:flex items-start py-8 md:py-12 lg:py-16 w-full gap-6 sm:gap-8 lg:gap-10 justify-between">
        <Accordion
          type="single"
          collapsible
          className="w-full px-8 sm:px-12 lg:px-20"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              SharpCredit works both on mobile USSD and our Website. <br />
              Dial ( *347*780*50#) to apply or click here to apply.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much cash can I borrow?</AccordionTrigger>
            <AccordionContent>
              The minimum cash loan amount is ₦10,000 and the maximum cash loan
              amount is ₦500,000.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who is eligible?</AccordionTrigger>
            <AccordionContent>
              A federal or state government worker whose salary is being paid
              through Remita payment platform. <br />
              Any private or corporate employee of any organisations whose
              salary is being paid through Remita payment platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need documents to apply?</AccordionTrigger>
            <AccordionContent>No documentation.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I apply?</AccordionTrigger>
            <AccordionContent>
              Apply on the website or *347*43#
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>When will I get my cash?</AccordionTrigger>
            <AccordionContent>
              Loan is instantly processed once application is done and approved.
              Then your account is funded.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full px-8 lg:px-20">
          <AccordionItem value="item-7">
            <AccordionTrigger>
              How do I payback my sharpcredit loan?
            </AccordionTrigger>
            <AccordionContent>
              Repayment is automatically deducted on from your salary.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Is it possible to change loan amount after I apply?
            </AccordionTrigger>
            <AccordionContent>No.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Can I apply more than once via ussd or website?
            </AccordionTrigger>
            <AccordionContent>
              You are not allowed to apply for more than one loan at a time. You
              can request for another loan once current loan has been cleared.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Do I need collateral?</AccordionTrigger>
            <AccordionContent>
              No colleteral is needed to get this loan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>What happens if I default?</AccordionTrigger>
            <AccordionContent>
              We are hopeful that as a customer, you will try and keep up with
              your obligations and ensure your loan is paid off as and when due.
              Kindly refer to our Terms and Conditions here.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              Why was I unable to complete my loan request?
            </AccordionTrigger>
            <AccordionContent>
              Possible Reasons: <br />
              <ul>
                <li>You have not been profiled to access SharpCredit loans</li>
                <li>Your salary is not being processed by Remita</li>
                <li>Your email is not valid</li>
                <li>Your details are not correct</li>
                <li>You have an existing loan under processing</li>
                <li>
                  Your Mobile number is not not registered in your salary
                  payroll
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default FaqsPage;
