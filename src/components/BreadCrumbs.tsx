import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((path: string) => path);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="flex items-center">
            <Link to="/">
              <FaHome className="mr-1" /> Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames.map((link: string, index: number) => {
          const href: string = `/${pathNames.slice(0, index + 1).join("/")}`;
          const linkName: string =
            link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={href}>{linkName}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
