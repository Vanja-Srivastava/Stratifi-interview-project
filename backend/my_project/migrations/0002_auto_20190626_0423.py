# Generated by Django 2.2.2 on 2019-06-26 04:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('my_project', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usermodel',
            old_name='email',
            new_name='fullname',
        ),
    ]
