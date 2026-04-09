from django.contrib import admin
from .models import Project, SkillCategory, Skill

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'grid_span', 'order')
    list_editable = ('status', 'grid_span', 'order')
    search_fields = ('title', 'description')

class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'order')
    list_editable = ('order',)
    inlines = [SkillInline]

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'order')
    list_filter = ('category',)
    list_editable = ('order',)
