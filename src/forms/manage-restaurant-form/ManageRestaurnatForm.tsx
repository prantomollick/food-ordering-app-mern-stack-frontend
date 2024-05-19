import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";

const formSchema = z.object({
  restaurantName: z.string({ required_error: "Restaurant name is Required" }),
  city: z.string({ required_error: "City is required" }),
  country: z.string({ required_error: "Country is required" }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery price is required",
    invalid_type_error: "Must be a valid number",
  }),
  estimateDeliveryTime: z.coerce.number({
    required_error: "Estimated delivery time is required!",
    invalid_type_error: "Must be a valid number",
  }),

  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    }),
  ),

  imageFile: z.instanceof(File, { message: "image is required" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type ManageRestaurnatFormProps = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

function ManageRestaurnatForm({}: ManageRestaurnatFormProps) {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {
    //TODO - Convert formDataJson to a new FormData object
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-lg bg-gray-50 p-10"
      >
        <DetailsSection />
      </form>
    </Form>
  );
}

export default ManageRestaurnatForm;
