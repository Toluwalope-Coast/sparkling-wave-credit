import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ModeToggle } from "@/utils/modeToggler";
import ProfilePage from "../profile/page";
import ResetPasswordPage from "@/app/(auth)/resetpassword";
import { Shield, Palette, Key, User, Settings } from "lucide-react";

const AccountPage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Account Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Manage your profile, security settings, and preferences
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Profile Section */}
        <div className="xl:col-span-2">
          <ProfilePage />
        </div>

        {/* Settings Section */}
        <div className="xl:col-span-1">
          <Card className="h-fit shadow-lg border border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-green-500 dark:to-emerald-600 text-white">
              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6" />
                <div>
                  <CardTitle className="text-xl">Account Settings</CardTitle>
                  <CardDescription className="text-blue-100 dark:text-green-100">
                    Security and preferences
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="security"
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                        <Key className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Security
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Password and authentication
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <ResetPasswordPage />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="preferences" className="border-b-0">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Preferences
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Theme and appearance
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                            Screen Appearance
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Choose between dark and light mode
                          </p>
                        </div>
                        <ModeToggle />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <Card className="mt-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-blue-500 dark:to-purple-600 text-white">
              <div className="flex items-center gap-3">
                <User className="h-6 w-6" />
                <div>
                  <CardTitle className="text-xl">Account Status</CardTitle>
                  <CardDescription className="text-green-100 dark:text-blue-100">
                    Your account overview
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Account Status
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Security Level
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    High
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Palette className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Theme
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    System
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
