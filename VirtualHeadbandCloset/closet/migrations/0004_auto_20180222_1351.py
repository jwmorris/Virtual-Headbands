# Generated by Django 2.0.1 on 2018-02-22 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('closet', '0003_auto_20180129_1743'),
    ]

    operations = [
        migrations.AlterField(
            model_name='headband',
            name='image_path',
            field=models.ImageField(upload_to='closet/static/'),
        ),
    ]
