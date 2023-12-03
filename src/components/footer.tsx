import Container from "./container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="mx-auto py-2 md:mt-12 text-sm">
          <hr className="h-px bg-gray-500 dark:bg-white opacity-30  border-0 mb-4" />
          <div className="flex items-center mx-auto text-gray-600 dark:text-white container justify-center md:justify-between py-2">
            <div>
              <span className="font-normal">
                © Copyright 2023, All Rights Reserved{" "}
              </span>
            </div>
            <a
              className="items-center gap-2 hidden md:flex"
              href="#"
              rel="noopener noreferrer"
            >
              <span className="hover:underline focus-visible:underline">
                Adhis Mauliyahsa Ashafaat
              </span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
