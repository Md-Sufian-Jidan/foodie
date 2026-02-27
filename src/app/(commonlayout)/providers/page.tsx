import { providerActions } from "@/actions/getProviders";
import { ProvidersClient, ProvidersHero, ProvidersLoadingSkeleton } from "@/components/modules/providers";
import { Suspense } from "react";
export const dynamic = "auto";
export const revalidate = 0;

export default async function ProvidersPage() {
    const providers = await providerActions();

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
            <ProvidersHero />
            <Suspense fallback={<ProvidersLoadingSkeleton />}>
                <ProvidersClient initialProviders={providers?.data?.data || []} />
            </Suspense>
        </div>
    );
}