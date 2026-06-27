import { Link } from "react-router";

import { Button } from "@/shared/ui/button";
import { paths } from "@/routes/route-definitions";

import Error04Illustration from "@/assets/svg/error-04-illustration";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 px-8 py-8 sm:py-16 lg:justify-between lg:py-24">
      <Error04Illustration className="h-[clamp(300px,50vh,600px)]" />

      <div className="text-center">
        <h4 className="mb-1.5 text-2xl font-semibold">
          Halaman Tidak Ditemukan ⚠
        </h4>
        <p className="mb-5">
          Kami tidak dapat menemukan halaman yang Anda cari
        </p>
        <Button
          nativeButton={false}
          size="lg"
          className="rounded-lg text-base"
          render={(props) => (
            <Link to={paths.public.$.index.$buildPath({})} {...props} />
          )}
        >
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
