import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Mail, ShieldCheck, Camera } from "lucide-react";
import Image from "next/image";

export default function ProfileDetails({ user }: { user: any }) {
    const joinedDate = new Date(user.createdAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
    });

    return (
        <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18] overflow-hidden sticky top-8">
            {/* Header / Avatar Section */}
            <div className="h-24 bg-[#D97757]/10 dark:bg-[#E08B6B]/10 relative" />
            <div className="px-6 -mt-12 relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-white dark:border-[#1C1A18] bg-[#FAF9F7] dark:bg-[#121110] flex items-center justify-center overflow-hidden shadow-md">
                    {user.image ? (
                        <Image src={user.image} alt={user.name} width={96} height={96} />
                    ) : (
                        <User className="w-12 h-12 text-[#D97757]" />
                    )}
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                    {user.name}
                </h2>
                <Badge variant="outline" className="mt-1 border-[#6B8E7D] text-[#6B8E7D] uppercase tracking-wider text-[10px]">
                    {user.role}
                </Badge>
            </div>

            <CardContent className="mt-8 space-y-6 px-8 pb-8 font-jakarta">
                <div className="space-y-4">
                    <DetailItem
                        icon={<Mail className="w-4 h-4" />}
                        label="Email Address"
                        value={user.email}
                        isVerified={user.emailVerified}
                    />
                    <DetailItem
                        icon={<ShieldCheck className="w-4 h-4" />}
                        label="Account Status"
                        value={user.status}
                    />
                    <DetailItem
                        icon={<Calendar className="w-4 h-4" />}
                        label="Member Since"
                        value={joinedDate}
                    />
                </div>

                <div className="pt-6 border-t border-[#6B7280]/10">
                    <p className="text-xs text-[#6B7280] dark:text-[#B3B3B0] text-center italic">
                        "Your taste buds are in good hands."
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

function DetailItem({ icon, label, value, isVerified }: any) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 p-2 rounded-lg bg-[#FAF9F7] dark:bg-[#121110] text-[#D97757]">
                {icon}
            </div>
            <div>
                <p className="text-xs font-semibold text-[#6B7280] dark:text-[#B3B3B0] uppercase tracking-wide">
                    {label}
                </p>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[#1F2933] dark:text-[#F5F4F2]">{value}</p>
                    {isVerified && (
                        <Badge className="bg-[#6B8E7D] text-[8px] h-4">VERIFIED</Badge>
                    )}
                </div>
            </div>
        </div>
    );
}