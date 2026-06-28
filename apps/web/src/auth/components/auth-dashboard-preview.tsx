import { cn } from "@/shared/lib/utils";

/**
 * AuthDashboardPreview — left panel of the split-screen auth layout.
 * Shows dashboard screenshot with BorderBeam decoration + background shape.
 * Inspired by shadcn-studio/blocks/{login,register}-page-02.
 */
export function AuthDashboardPreview({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative z-1 flex h-full items-center justify-center px-6", className)}>
      {/* Card with border beam */}
      <div className="relative shrink rounded-[20px] p-2.5 outline-2 -outline-offset-[2px] outline-border/30">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          alt="Tablenary Dashboard"
          className="h-[500px] w-full rounded-lg object-contain dark:hidden"
        />
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          alt="Tablenary Dashboard"
          className="hidden h-[500px] w-full rounded-lg object-contain dark:inline-block"
        />
      </div>
    </div>
  );
}

export default AuthDashboardPreview;
