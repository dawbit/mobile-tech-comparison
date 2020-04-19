using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace XamarinCross
{
    public partial class MainPage : ContentPage
    {
        Button ChangeText;
        public MainPage()
        {
            InitializeComponent();
        }

        private void PressMeButton_Pressed(object sender, EventArgs e)
        {
            (sender as Button).Text = "Nie naciskaj na mnie bardziej!";
        }

        private void PressMeButton_Clicked(object sender, EventArgs e)
        {
            (sender as Button).Text = "Właśnie zostałem naciśnion!";
        }

    }
}
