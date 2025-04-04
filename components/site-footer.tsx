export function SiteFooter() {
  return (
    <footer className="border-t py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SocialDash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
