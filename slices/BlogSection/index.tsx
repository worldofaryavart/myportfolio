import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogSection`.
 */
export type BlogSectionProps = SliceComponentProps<Content.BlogSectionSlice>;

/**
 * Component for "BlogSection" Slices.
 */
const BlogSection = ({ slice }: BlogSectionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[1fr,2fr] md:gap-x-8 md:gap-y-6">
        <Avatar
          image={slice.primary.image}
          className="order-1 max-w-sm md:order-none md:row-span-2"
        />
        <Heading size="xl" className="order-2 md:order-none">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert order-3 md:order-none">
          <PrismicRichText field={slice.primary.description} />
          <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_label}
        />
        </div>
      </div>
      <div className="mt-20">
        <hr />
      </div>
    </Bounded>
  );
};

export default BlogSection;
