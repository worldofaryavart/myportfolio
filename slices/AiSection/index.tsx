import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AiSection`.
 */
export type AiSectionProps = SliceComponentProps<Content.AiSectionSlice>;

/**
 * Component for "AiSection" Slices.
 */
const AiSection = ({ slice }: AiSectionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {slice.primary.title}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.description} />
          <Button
            linkField={slice.primary.button_link}
            label={slice.primary.button_label}
          />
        </div>
        {/* <PrismicNextImage field={slice.primary.avatar} className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"/> */}
        <Avatar
          image={slice.primary.image1}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
      <div className="mt-20">
        <hr />
      </div>
    </Bounded>
  );
};

export default AiSection;
