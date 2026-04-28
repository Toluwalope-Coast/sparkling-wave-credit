// import ResetPasswordPage from "@/app/(auth)/resetpassword";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ModeToggle } from "@/utils/modeToggler";

const SettingsPage: React.FC = () => {
  return (
    <main className="p-4 md:p-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account security settings.
          </CardDescription>
        </CardHeader>
        <Accordion type="single" collapsible className="w-full p-4 md:p-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>Reset Password</AccordionTrigger>
            <AccordionContent>
              {/* <ResetPasswordPage /> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger>Preferences</AccordionTrigger>
            <AccordionContent className="flex items-center justify-between">
              <h3>
                Screen Appearance{" "}
                <span className="text-sm">(dark or light mode)</span>
              </h3>
              <ModeToggle />
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </Card>
    </main>
  );
};

export default SettingsPage;
