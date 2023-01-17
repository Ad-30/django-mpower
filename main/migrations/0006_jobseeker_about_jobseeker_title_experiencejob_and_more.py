# Generated by Django 4.1 on 2023-01-16 12:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_application_date_applied_alter_jobs_postdate_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobseeker',
            name='about',
            field=models.CharField(default=None, max_length=700, null=True),
        ),
        migrations.AddField(
            model_name='jobseeker',
            name='title',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.CreateModel(
            name='ExperienceJob',
            fields=[
                ('exp_id', models.AutoField(primary_key=True, serialize=False)),
                ('job_title', models.CharField(default=None, max_length=100, null=True)),
                ('company', models.CharField(default=None, max_length=200, null=True)),
                ('time_period', models.CharField(default=None, max_length=50, null=True)),
                ('description', models.CharField(default=None, max_length=500, null=True)),
                ('user_id', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='main.jobseeker')),
            ],
            options={
                'db_table': 'experiencejob',
            },
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('edu_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default=None, max_length=100, null=True)),
                ('school', models.CharField(default=None, max_length=200, null=True)),
                ('time_period', models.CharField(default=None, max_length=50, null=True)),
                ('description', models.CharField(default=None, max_length=500, null=True)),
                ('user_id', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='main.jobseeker')),
            ],
            options={
                'db_table': 'education',
            },
        ),
    ]