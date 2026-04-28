// @/components/reusable/Security.tsx

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const Security: React.FC = () => {
  return (
    <main className="p-4 md:p-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Security</CardTitle>
          <CardDescription>
            Manage your account security settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch id="two-factor-auth" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Login Activity</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  View and manage your login activity.
                </p>
              </div>
              <Button size="sm" variant="outline">
                View Activity
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Authorized Devices</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage the devices that have access to your account.
                </p>
              </div>
              <Button size="sm" variant="outline">
                Manage Devices
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Security;
