import clsx from "clsx";
import { siteConfig } from "@/config/site";

function Office({ name, lines, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {lines.map((line) => (
        <span key={line}>
          {line}
          <br />
        </span>
      ))}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      {siteConfig.offices.map((office) => (
        <li key={office.name}>
          <Office name={office.name} lines={office.lines} invert={invert} />
        </li>
      ))}
    </ul>
  );
};

export default Offices;
