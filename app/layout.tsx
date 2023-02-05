import ChakraWrapper from "@/components/Chakra";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Upwork landing page</title>
        <meta
          name="description"
          content="A platform for professionals to showcase their work and find new clients."
        />
        <meta
          property="og:title"
          content="Upwork Design - A platform for professionals"
        />
        <meta
          property="og:description"
          content="Showcase your work and find new clients on Upwork."
        />
        <meta
          property="og:image"
          content="../components/images/SocialShring.webp"
        />
        <meta property="og:url" content="" />
      </head>

      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
