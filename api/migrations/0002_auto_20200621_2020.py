# Generated by Django 2.2 on 2020-06-21 20:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='player',
            unique_together={('game', 'name')},
        ),
    ]
