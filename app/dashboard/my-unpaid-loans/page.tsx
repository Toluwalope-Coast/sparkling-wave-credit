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
import Link from "next/link";
import { DataTable } from "../components/ui/custom/data-table";
import LoadingSpinner from "../components/LoadingSpinner";

// Define column configuration for DataTable
const columns = [
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
    accessorKey: "created_at",
    header: "Created Date",
    cell: (info: any) => formatDateTime(info.getValue()),
  },
  // New column for the "View More" button
  {
    accessorKey: "id", // Assuming "id" is the loan ID
    header: "Actions",
    cell: (info: any) => (
      <Link href={`/dashboard/my-unpaid-loans/${info.getValue()}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View More
        </button>
      </Link>
    ),
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
          <CardTitle>All Unpaid Loans</CardTitle>
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
