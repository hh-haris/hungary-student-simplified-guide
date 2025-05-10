export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      programs: {
        Row: {
          created_at: string | null
          credit_hours: number | null
          degree_level: string
          description: string | null
          duration: string | null
          field_of_study: string
          id: string
          language: string
          min_usat_score: number
          name: string
          university_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          credit_hours?: number | null
          degree_level: string
          description?: string | null
          duration?: string | null
          field_of_study: string
          id?: string
          language?: string
          min_usat_score: number
          name: string
          university_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          credit_hours?: number | null
          degree_level?: string
          description?: string | null
          duration?: string | null
          field_of_study?: string
          id?: string
          language?: string
          min_usat_score?: number
          name?: string
          university_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "programs_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      timeline: {
        Row: {
          created_at: string | null
          date_range: string
          description: string
          id: string
          link: string | null
          step_number: number
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_range: string
          description: string
          id?: string
          link?: string | null
          step_number: number
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_range?: string
          description?: string
          id?: string
          link?: string | null
          step_number?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      universities: {
        Row: {
          city: string
          created_at: string | null
          id: string
          image_url: string | null
          intro: string
          min_usat_score: number
          name: string
          programs: string[]
          updated_at: string | null
          website: string | null
        }
        Insert: {
          city: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          intro: string
          min_usat_score: number
          name: string
          programs: string[]
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          city?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          intro?: string
          min_usat_score?: number
          name?: string
          programs?: string[]
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      usat_categories: {
        Row: {
          created_at: string | null
          description: string
          id: string
          min_passing_score: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          min_passing_score?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          min_passing_score?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      usat_university_recommendations: {
        Row: {
          category_id: string
          created_at: string | null
          id: string
          recommendation_level: string
          university_id: string
          updated_at: string | null
          usat_score_max: number
          usat_score_min: number
        }
        Insert: {
          category_id: string
          created_at?: string | null
          id?: string
          recommendation_level: string
          university_id: string
          updated_at?: string | null
          usat_score_max: number
          usat_score_min: number
        }
        Update: {
          category_id?: string
          created_at?: string | null
          id?: string
          recommendation_level?: string
          university_id?: string
          updated_at?: string | null
          usat_score_max?: number
          usat_score_min?: number
        }
        Relationships: [
          {
            foreignKeyName: "usat_university_recommendations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "usat_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usat_university_recommendations_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
