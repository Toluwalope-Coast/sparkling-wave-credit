// @/components/reusable/Profile.tsx

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Profile: React.FC = () => {
  return (
    <main>
      <Card className="h-[75vh]">
        <CardHeader className="pb-4">
          <CardTitle>General</CardTitle>
          <CardDescription>
            Update your general account settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input defaultValue="jdoe" id="username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input defaultValue="jdoe@example.com" id="email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                defaultValue="I'm a YouTube creator!"
                id="bio"
                rows={3}
              />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};
