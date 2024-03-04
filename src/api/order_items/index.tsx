import { supabase } from "@/src/lib/supabase";
import { useAuth } from "@/src/providers/AuthProvider";
import { InsertTables } from "@/src/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useInsertOrderItems = () => {
  return useMutation({
    async mutationFn(data: InsertTables<"order_items">[]) {
      const { error, data: newOrder } = await supabase
        .from("order_items")
        .insert(data)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return newOrder;
    },
  });
};
