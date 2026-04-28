"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { getAllApiRequest } from "@/lib/apiRequest";
import { toast } from "react-toastify";
import { getTokenFromCookies } from "@/lib/cookies";
import { formatDateTime } from "@/utils/dateTimeUtility";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { DataTable } from "../components/ui/custom/data-table";
import LoadingSpinner from "../components/LoadingSpinner";

// Define column configuration for DataTable
const columns = [
  {
    accessorKey: "id",
    header: "Loan ID",
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
    accessorKey: "principal_amount",
    header: "Principal Amount",
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
    accessorKey: "interest_amount",
    header: "Interest Amount",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
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
    accessorKey: "disbursement_status",
    header: "Disbursement Status",
    cell: (info: any) => (
      <Badge variant={getBadgeVariant(info.getValue())}>
        {info.getValue()}
      </Badge>
    ),
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
    accessorKey: "disbursement_date",
    header: "Disbursement Date",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
  {
    accessorKey: "mandate_reference",
    header: "Mandate Reference",
  },
  {
    accessorKey: "repayment_amount",
    header: "Repayment Amount",
    cell: (info: any) =>
      info.getValue()
        ? new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(info.getValue())
        : "N/A",
  },
  {
    accessorKey: "total_repayment_amount",
    header: "Total Repayment Amount",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "repayment_frequency",
    header: "Repayment Frequency",
  },
  {
    accessorKey: "repayment_date",
    header: "Repayment Date",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
  {
    accessorKey: "total_outstanding_amount",
    header: "Total Outstanding Amount",
    cell: (info: any) =>
      new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue()),
  },
  {
    accessorKey: "last_installment_date",
    header: "Last Installment Date",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
  {
    accessorKey: "created_at",
    header: "Created Date",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
  {
    accessorKey: "updated_at",
    header: "Updated Date",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
];

const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "processing":
      return "warning"; // Orange for processing
    case "active":
      return "success"; // Green for active
    case "rejected":
      return "danger"; // Red for rejected
    default:
      return "default"; // Default for other statuses
  }
};

const LoanPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loanData, setLoanData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const token = getTokenFromCookies();

  // Fetch loan data
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        throw new Error("No token found. User must be logged in.");
      }
      setLoading(true);
      setError(null);
      try {
        const data = await getAllApiRequest("/api/loans/me/", token);
        setLoanData(data); // Assuming data is an array of loan objects
      } catch (error) {
        console.error("Failed to fetch loan data:", error);
        setError("Failed to load loan data");
        toast.error("Failed to load loan data");
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
    <main className="flex flex-1 flex-col gap-4 p-4 h-full md:gap-8 md:p-6">
      <Card>
        <CardHeader>
          <CardTitle>All Loans</CardTitle>
          <CardDescription>View my complete loan history.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={loanData} columns={columns} />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoanPage;
