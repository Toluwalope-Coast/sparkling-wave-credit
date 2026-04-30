"use client";

import { useState, useEffect } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { getAllApiRequest } from "@/lib/apiRequest";
import { toast } from "react-toastify";
import { getTokenFromCookies } from "@/lib/cookies";
import { formatDateTime } from "@/utils/dateTimeUtility";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "../components/ui/custom/data-table";
import LoadingSpinner from "../components/LoadingSpinner";

// Define column configuration for DataTable
const columns = [
  {
    accessorKey: "request_id",
    header: "Request ID",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "channel",
    header: "Channel",
  },
  {
    accessorKey: "max_eligible_offer",
    header: "Max Eligible Offer",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "first_loan_offer",
    header: "First Loan Offer",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "second_loan_offer",
    header: "Second Loan Offer",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "principal_amount",
    header: "Principal Amount",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "interest_amount",
    header: "Interest Amount",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "tenure",
    header: "Tenure",
  },
  {
    accessorKey: "processing_fee",
    header: "Processing Fee",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "mandate_reference",
    header: "Mandate Reference",
  },
  {
    accessorKey: "monthly_repayment",
    header: "Monthly Repayment",
    cell: (info: any) =>
      info.getValue()
        ? new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(info.getValue())
        : "N/A",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info: any) => (
      <Badge variant={getBadgeVariant(info.getValue())}>
        {info.getValue()}
      </Badge>
    ),
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
];

const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "disbursement processing":
      return "warning"; // For orange background
    case "disbursement failure":
      return "danger"; // For red background
    case "approval":
      return "success"; // Default success (green) for approval
    default:
      return "default"; // Default badge style for other statuses
  }
};

const SessionTrackingPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sessionData, setSessionData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const token = getTokenFromCookies();

  // Fetch session tracking data
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        throw new Error("No token found. User must be logged in.");
      }
      setLoading(true);
      setError(null);
      try {
        const data = await getAllApiRequest("/api/session_tracking/me/", token);
        setSessionData(data); // Assuming data is an array of session tracking objects
      } catch (error) {
        console.error("Failed to fetch session tracking data:", error);
        setError("Failed to load session tracking data");
        toast.error("Failed to load session tracking data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 h-[full] md:gap-8 md:p-6">
      {/* Loan Requests DataTable */}
      <Card>
        <CardHeader>
          <CardTitle>Loans Attempted</CardTitle>
          <CardDescription>
            View all loan received and attempted.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={sessionData} columns={columns} />
        </CardContent>
      </Card>
    </main>
  );
};

export default SessionTrackingPage;
