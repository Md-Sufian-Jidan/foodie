"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldError,
} from "@/components/ui/field";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email(),
    password: z.string().min(8).optional(),
    confirmPassword: z.string().optional(),
});

export default function ProfileForm({ user }: { user: any }) {
    const form = useForm({
        defaultValues: {
            name: user.name,
            email: user.email,
            password: "",
            confirmPassword: "",
        },
        onSubmit: async (   { value }) => {
            const toastId = toast.loading("Updating profile...");
            if (value.password && value.password !== value.confirmPassword) {
                toast.error("Passwords do not match", { id: toastId });
                return;
            }

            try {
                // Call API to update user
                const { data, error } = await authClient.updateUser(value);

                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }

                toast.success("Profile updated successfully!", { id: toastId });
            } catch {
                toast.error("Something went wrong", { id: toastId });
            }
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
            }}
            className="space-y-4 max-w-xl"
        >
            <FieldGroup>
                <form.Field
                    name="name"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.isTouched && !field.state.meta.isValid && (
                                <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                    )}
                />

                <form.Field
                    name="email"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.isTouched && !field.state.meta.isValid && (
                                <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                    )}
                />

                <form.Field
                    name="password"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>New Password</FieldLabel>
                            <Input
                                id={field.name}
                                type="password"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Leave blank to keep current password"
                            />
                            {field.state.meta.isTouched && !field.state.meta.isValid && (
                                <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                    )}
                />

                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                            <Input
                                id={field.name}
                                type="password"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Confirm new password"
                            />
                            {field.state.meta.isTouched && !field.state.meta.isValid && (
                                <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button type="submit">Save Changes</Button>
        </form>
    );
}
